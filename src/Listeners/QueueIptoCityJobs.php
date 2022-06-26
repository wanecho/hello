<?php

/*
 * This file is part of fof/follow-tags.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Wanecho\Hello\Listeners;

use Flarum\Post\Event\Saving;
use Wanecho\Hello\Jobs;
use Illuminate\Events\Dispatcher;

class QueueIptoCityJobs
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saving::class, [$this, 'whenPostCreated']);
    }

    public function whenPostCreated(Saving $event)
    {
        if ($event->post->exists) {
            return;
        }

        $event->post->afterSave(function ($post) {
            if (!$post->discussion->exists) {
                return;
            }
            resolve('flarum.queue.connection')->push(
                new Jobs\IptoCityWhenPosted($post)
            );
        });
    }

}
