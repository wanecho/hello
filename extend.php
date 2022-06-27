<?php

/*
 * This file is part of echo/hello.
 *
 * Copyright (c) 2022 echo.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Wanecho\Hello;

use Flarum\Extend;
use Flarum\Api\Serializer\PostSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Event())->subscribe(Listeners\QueueIptoCityJobs::class),
    (new Extend\ApiSerializer(PostSerializer::class))->attributes(AddPostAttributes::class),
    (new Extend\Console())
        ->command(Console\HelloTest::class),
];
