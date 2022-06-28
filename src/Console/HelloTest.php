<?php

namespace Wanecho\Hello\Console;

use Flarum\Console\AbstractCommand;
use Flarum\Post\Post;
use itbdw\Ip\IpLocation;

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
        // $ip = '223.104.1.215';
        // $ipdata =  IpLocation::getLocation($ip);
        // // print_r($ipdata);
        // print_r((!empty($ipdata['city'])?$ipdata['city']:!empty($ipdata['province']))?$ipdata['province']:$ipdata['country']);
        // die();
        Post::whereNull('ip_city')->where('type','comment')->groupBy('ip_address')->orderBy('id', 'desc')->chunk(200, function ($rows) {
            foreach( $rows as $row ){
               $city =  $this->getcity($row->ip_address);
               if(!empty($city)){
                    Post::where('ip_address',$row->ip_address)->update(['ip_city'=>$city]);
               }
            }
            echo "处理200个\n";
        });

    }

    private function getcity($ip){
        $ipdata =  IpLocation::getLocation($ip);
        if(!isset($ipdata['error'])){
            return (!empty($ipdata['city'])?$ipdata['city']:!empty($ipdata['province']))?$ipdata['province']:$ipdata['country'];
        }
        return "";
    }
}
