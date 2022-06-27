<?php

namespace Wanecho\Hello\Console;

use Flarum\Console\AbstractCommand;
use Flarum\Post\Post;

class HelloTest extends AbstractCommand 
{
    protected function configure()
    {
        $this
            ->setName('wanecho:hellotest')
            ->setDescription('test');
    }

    protected function fire()
    {
        // $ip = '114.101.232.16';
        // $res =  Post::where('ip_address',$ip)->groupBy('ip_address')->first();
        // if(!empty($res->ip_city)){
        //     print_r($res->ip_city);
        // }
        //http://ip-api.com/json/24.28.24.176?lang=zh-CN
        $rows =  Post::whereNull('ip_city')->groupBy('ip_address')->orderBy('id', 'desc')->get();
        foreach( $rows as $row ){
           $city =  $this->getcity($row->ip_address);
           if(!empty($city)){
                Post::where('ip_address',$row->ip_address)->update(['ip_city'=>$city]);
           }
        }
    }

    private function getcity($ip){

        $url = 'http://ip-api.com/json/'.$ip.'?lang=zh-CN';
        try {
            echo $result =  file_get_contents($url);
            $result =  json_decode($result,true);
            if($result['status']=='success'){
                //国内显示城市  国外显示 地区
                return $result['countryCode']=='CN'?$result['city']:$result['regionName'];
            }
            return "";
        } catch (\Throwable $th) {
            echo $th->getMessage();
            return false;
        }
    }
}
