## Assignment 01

* Q1=> What are some differences between interfaces and types in TypeScript?

answer=> 
Interface : 
1) Interface একাধিকবার একই নামে declar করে একত্রে কাজ করা যায়। 
2) Interface মূলত object , class গঠন এ  বেশি ব্যবহৃত হয়। 
3) Interface সহজভাবে অন্য interface থেকে extends করে নতুন interface তৈরি করা যায়। 
4) Interface এর flaxibility সীমিত , তবে object এর ক্ষেত্রে বেশি flexible । 
5) Interface class গঠনে বেশি উপকারী , ক্লাস সরাসরি একটি interface implement করতে পারে। 
6) সাধারণত interface গুলো বেশি Readability হয়। 

Type : 
1) Type একবার declar করা যায়, বারবার একই নামে declar করা যায় না। 
2) Type শুধু object নয়, এটি primitive type (number, string) , unions , tuples ইত্যাদি define করা যায়। 
3) Type ব্যবহার করে extends করা যায় , কিন্তু তা করতে হয়  intersection (&) ব্যবহার করে। 
4) Type অনেক বেশি flexible , বিভিন্ন ধরনের type একত্রিত করে জটিল টাইপ তৈরি করা যায়। 
5) Type এর readability interface এর তুলনায় কম , তবে টাইপ বেশি flexible ।



* Q5.What is type inference in TypeScript? Why is it helpful?

answer: 
Type inference হলো TypeScript এর একধরনের type বা বৈশিষ্ট্য , যেখানে টাইপ স্পষ্টভাবে না লিখা হলে TypeScript নিজে থেকে টাইপ অনুমান করে নেয়। 

Why is it helpful ?
1) কম কোড লিখে কাজ করা যায় , বারবার টাইপ ডিক্লেয়ার করতে হয় না। 
2) টাইপ ভুল ধরতে সাহায্য করে , ভুল টাইপ ব্যবহারে TypeScript নিজে থেকে warning দেয়। 
3) ভুল টাইপ ব্যবহারে সম্ভাবনা কমে ফলে বাগ ও কম হয়।
