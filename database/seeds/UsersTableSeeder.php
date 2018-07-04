<?php

use Illuminate\Database\Seeder;
use FarindraLumen\Uuid\Uuid;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->new('Super','super@moganics.com','super321$#');
        $this->new('Admin','admin@moganics.com','admin123$#');
        $this->new('Kholipah','kholipha@moganics.com','wep1234');
        $this->new('Dian','dian@moganics.com','wep1234');
        $this->new('Ocky','ocky@moganics.com','wep1234');
        $this->new('Achen','achen@moganics.com','wep1234');
    }

    /**
     * membuat user baru
     * @param string $name nama user
     * @param email $email email user
     * @param string $password password user
     * @throws Exception
     */
    private function new( $name, $email, $password = 'wep1234' ){
        DB::table('users')->insert([
            'id' => Uuid::generate(5,$email . microtime(true) , Uuid::NS_DNS)->string,
            'email'=> $email,
            'name'=> $name,
            'password' => bcrypt($password),
            'remember_token' => str_random(10),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]);
    }
}
