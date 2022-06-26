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
        $url = 'http://ip-api.com/json/'.$ip.'?lang=zh-CN';
        $result =  file_get_contents($url);
        $result =  json_decode($result,true);
        if($result['status'] == 'success'){
            return $result['city'];
        }
        return ""; 
    }
}


