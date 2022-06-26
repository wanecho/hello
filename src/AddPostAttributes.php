<?php

/*
 * This file is part of blomstra/conversations.
 *
 * Copyright (c) 2022 Blomstra Ltd.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Wanecho\Hello;

use Flarum\Api\Serializer\PostSerializer;
use Flarum\Post\Post;

class AddPostAttributes
{
    public function __invoke(PostSerializer $serializer, Post $post, array $attributes): array
    {
        $attributes['ip_city'] = $post->ip_city;
        return $attributes;
    }
}