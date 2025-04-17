<x-app-layout>
  <x-slot name="header">
    <div class="flex justify-between items-center">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        @if ($conversationGroup->job)
          {{ $conversationGroup->job->title }} -
        @endif
        {{ $conversationGroup->otherParticipant(auth()->user())->name }}との会話
      </h2>
      <a href="{{ route('messages.index') }}" class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
        戻る
      </a>
    </div>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4">
        <div class="p-6 text-gray-900">
          <div class="space-y-4" id="messages-container">
            @foreach ($messages as $message)
              <div class="flex {{ $message->sender_id === auth()->id() ? 'justify-end' : 'justify-start' }}">
                <div
                  class="rounded-lg px-4 py-2 max-w-md {{ $message->sender_id === auth()->id() ? 'bg-blue-100' : 'bg-gray-100' }}">
                  <p>{{ $message->message }}</p>
                  <p class="text-xs text-gray-500 mt-1 text-right">
                    {{ $message->created_at->format('Y/m/d H:i') }}
                  </p>
                </div>
              </div>
            @endforeach
          </div>
        </div>
      </div>

      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 text-gray-900">
          <form action="{{ route('messages.store', $conversationGroup) }}" method="POST">
            @csrf
            <div class="mb-4">
              <label for="message" class="block text-gray-700 text-sm font-bold mb-2">メッセージ</label>
              <textarea name="message" id="message" rows="3"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required></textarea>
            </div>
            <div class="flex items-center justify-end">
              <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  @push('scripts')
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const messagesContainer = document.getElementById('messages-container');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      });
    </script>
  @endpush
</x-app-layout>
