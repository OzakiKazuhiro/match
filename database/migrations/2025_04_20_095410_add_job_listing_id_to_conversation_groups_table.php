<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('conversation_groups', function (Blueprint $table) {
            $table->foreignId('job_listing_id')->nullable()->constrained('job_listings')->onDelete('set null')->after('applicant_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('conversation_groups', function (Blueprint $table) {
            $table->dropConstrainedForeignId('job_listing_id');
        });
    }
};