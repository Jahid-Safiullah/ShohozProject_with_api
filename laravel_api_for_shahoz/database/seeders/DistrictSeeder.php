<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\District;
class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $districts = [
            'Dhaka',
            'Chittagong',
            'Rajshahi',
            'Khulna',
            'Barisal',
            'Sylhet',
            'Rangpur',
            'Mymensingh',
            'Comilla',
            'Feni',
            'Noakhali',
            'Chandpur',
            'Laxmipur',
            'Bhola',
            'Jhalokathi',
            'Patuakhali',
            'Pirojpur',
            'Barguna',
            'Madaripur',
            'Shariatpur',
            'Gopalganj',
            'Faridpur',
            'Magura',
            'Jhenaidah',
            'Narail',
            'Jessore',
            'Satkhira',
            'Meherpur',
            'Chuadanga',
            'Kushtia',
            'Bagerhat',
            'Sirajganj',
            'Pabna',
            'Bogra',
            'Joypurhat',
            'Naogaon',
            'Natore',
            'Chapainawabganj',
            'Kishoreganj',
            'Netrokona',
            'Brahmanbaria',
            'Habiganj',
            'Maulvibazar',
            'Sunamganj',
            'Jamalpur',
            'Narsingdi',
            'Tangail',
            'Munshiganj',
            'Narayanganj',
            'Gazipur',
            'Shariatpur',
            'Sherpur',
            'Manikganj',
            'Joypurhat',
            'Rajbari',
            'Kishoreganj',
        ];


        foreach ($districts as $district) {
            District::create([
                'name' => $district,
            ]);
        }
    }
}
