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
        $hdrs = [
            'http'=>[
                'header'=>
                    "Accept:application/json;charset=UTF-8\r\n" .
                    "X-Bce-Signature:AppCode/642e466cc32c423fa34faf56916cd485"
            ]
        ];
        $context = stream_context_create($hdrs);
        $url    = 'http://gwgp-dd3tdfvrfcw.n.bdcloudapi.com?ip='.$ip;
        $result =  file_get_contents($url,false,$context);
        $result =  json_decode($result,true);
        if($result['message'] == 'Success'){
           return $result['data']['details']['city'];
        }
        return ""; 
    }
}


