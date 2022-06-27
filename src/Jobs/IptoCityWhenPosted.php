<?php

/*
 * This file is part of fof/follow-tags.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Wanecho\Hello\Jobs;

use Flarum\Discussion\Discussion;
use Flarum\Notification\NotificationSyncer;
use Flarum\User\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Flarum\Post\Post;
use itbdw\Ip\IpLocation;

class IptoCityWhenPosted implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    /**
     * @var Post
     */
    protected $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }


    public function handle()
    {
        if (!$this->post->exists) {
            return;
        }
        $this->post->ip_city = $this->getIpcity($this->post->ip_address);
        $this->post->save();
    }

    private function getIpcity($ip){
        $res =  Post::where('ip_address',$ip)->first();
        if(!empty($res->ip_city)){
            return $res->ip_city;
        }
        $ipdata =  IpLocation::getLocation($ip);
        if(!isset($ipdata['error'])){
            //如果城市不存在就显示国家
            return !empty($ipdata['city'])?$ipdata['city']:$ipdata['country'];
        }
        return "";
    }
}


