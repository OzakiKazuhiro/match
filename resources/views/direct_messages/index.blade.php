<x-app-layout>
  <x-slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
      {{ __('メッセージ一覧') }}
    </h2>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 text-gray-900">
          @if ($conversationGroups->isEmpty())
            <p class="text-center py-4">メッセージはありません</p>
          @else
            <div class="divide-y divide-gray-200">
              @foreach ($conversationGroups as $group)
                <a href="{{ route('messages.show', $group) }}" class="block hover:bg-gray-50">
                  <div
                    class="px-4 py-4 sm:px-6 flex items-center justify-between {{ $group->hasUnreadMessages(auth()->id()) ? 'bg-blue-50' : '' }}">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">
                          @if ($group->job)
                            {{ $group->job->title }} -
                          @endif
                          {{ $group->otherParticipant(auth()->user())->name }}
                        </p>
                        <p class="text-sm text-gray-500 truncate max-w-md">
                          {{ $group->latestMessage ? $group->latestMessage->message : '（メッセージなし）' }}
                        </p>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                      <p
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {{ $group->latestMessage ? $group->latestMessage->created_at->format('Y/m/d H:i') : '' }}
                      </p>
                    </div>
                  </div>
                </a>
              @endforeach
            </div>
          @endif
        </div>
      </div>
    </div>
  </div>
</x-app-layout>
