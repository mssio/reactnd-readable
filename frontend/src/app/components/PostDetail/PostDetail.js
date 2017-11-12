import React from 'react';
import { PostEntryContainer } from 'app/containers'

export default function PostDetail ({ post }) {
  return (
    <div>
      <h2>Post Detail</h2>
      <PostEntryContainer entry={post} />
    </div>
  );
}
