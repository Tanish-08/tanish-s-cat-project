
import React from 'react';
import Card from './shared/Card';
import { CommunityPost } from '../types';
import { MessageSquare } from './Icons';

const mockPosts: CommunityPost[] = [
  {
    id: 1,
    author: 'CatLady_123',
    avatar: 'https://placekitten.com/100/100',
    title: 'Help! My cat is a picky eater. Any suggestions?',
    excerpt: 'I’ve tried everything from wet food to dry food, different brands, different flavors... He just sniffs it and walks away. I’m getting worried. What has worked for your picky felines?',
    replies: 28,
    views: 1402,
  },
  {
    id: 2,
    author: 'MaineCoonMan',
    avatar: 'https://placekitten.com/101/101',
    title: 'Best interactive toys to keep an indoor cat stimulated?',
    excerpt: 'My big boy has a lot of energy to burn. I\'m looking for some engaging toys that can keep him occupied while I\'m at work. Laser pointers are great but I want something more autonomous.',
    replies: 15,
    views: 987,
  },
  {
    id: 3,
    author: 'SiameseQueen',
    avatar: 'https://placekitten.com/102/102',
    title: 'Share your funniest cat moments!',
    excerpt: 'My Siamese cat, Luna, tried to "help" me make the bed this morning and ended up wrapped in the fitted sheet like a purrito. Let\'s hear your stories to brighten the day!',
    replies: 56,
    views: 3210,
  },
];


const Community: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-brand-dark">Community Forum</h2>
        <p className="mt-2 text-lg text-brand-text max-w-2xl mx-auto">
          Connect with fellow cat parents, share stories, and ask for advice.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {mockPosts.map((post) => (
          <Card key={post.id}>
            <div className="flex items-start gap-4">
              <img src={post.avatar} alt={post.author} className="w-14 h-14 rounded-full" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-brand-dark hover:text-brand-primary cursor-pointer transition">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Posted by <span className="font-semibold text-brand-secondary">{post.author}</span>
                </p>
                <p className="text-brand-text mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.replies} Replies</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="font-bold">{post.views}</span>
                        <span>Views</span>
                    </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;
