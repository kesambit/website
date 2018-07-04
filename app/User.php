<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use FarindraLumen\Uuid\Uuid;

class User extends Authenticatable
{
    use Notifiable;

    protected $primaryKey ='id';
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     *  Setup model event hooks
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function($model)
        {
            $model->id = Uuid::generate(5,$model->attributes['email'] . microtime(true) , Uuid::NS_DNS)->string;

            return true;
        });

    }

}
