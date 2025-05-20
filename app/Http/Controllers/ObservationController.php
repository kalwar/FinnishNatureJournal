<?php

namespace App\Http\Controllers;

use App\Models\Observation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ObservationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $observations = Observation::where('user_id', Auth::id())->latest()->get();
        return Inertia::render('Observations/Index', [
            'observations' => $observations,
        ]);
    }

    public function create()
    {
        return Inertia::render('Observations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'category' => 'required|string|max:50',
            'notes' => 'nullable|string',
        ]);
        $validated['user_id'] = Auth::id();
        $observation = Observation::create($validated);
        return redirect()->route('observations.index')->with('success', 'Observation logged!');
    }

    public function show(Observation $observation)
    {
        $this->authorize('view', $observation);
        return Inertia::render('Observations/Show', [
            'observation' => $observation,
        ]);
    }

    public function edit(Observation $observation)
    {
        $this->authorize('update', $observation);
        return Inertia::render('Observations/Edit', [
            'observation' => $observation,
        ]);
    }

    public function update(Request $request, Observation $observation)
    {
        $this->authorize('update', $observation);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'location' => 'required|string|max:255',
            'category' => 'required|string|max:50',
            'notes' => 'nullable|string',
        ]);
        $observation->update($validated);
        return redirect()->route('observations.index')->with('success', 'Observation updated!');
    }

    public function destroy(Observation $observation)
    {
        $this->authorize('delete', $observation);
        $observation->delete();
        return redirect()->route('observations.index')->with('success', 'Observation deleted!');
    }
}
