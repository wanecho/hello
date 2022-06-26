<?php
/*
 * This file is part of fof/best-answer.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('posts', 'ip_city')) {
            $schema->table('posts', function (Blueprint $table) {
                $table->string('ip_city',100)->nullable();
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('posts', function (Blueprint $table) {
            $table->dropColumn('ip_city');
        });
    },
];
