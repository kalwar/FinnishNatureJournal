<?php

namespace App\Policies;

use App\Models\Observation;
use App\Models\User;

class ObservationPolicy
{
    public function view(User $user, Observation $observation): bool
    {
        return $user->id === $observation->user_id;
    }

    public function update(User $user, Observation $observation): bool
    {
        return $user->id === $observation->user_id;
    }

    public function delete(User $user, Observation $observation): bool
    {
        return $user->id === $observation->user_id;
    }

    public function restore(User $user, Observation $observation): bool
    {
        return $user->id === $observation->user_id;
    }

    public function forceDelete(User $user, Observation $observation): bool
    {
        return $user->id === $observation->user_id;
    }
}
