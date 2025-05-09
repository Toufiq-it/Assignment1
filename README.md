## Assignment 01

Q1=> What are some differences between interfaces and types in TypeScript?
answer=>

interface:

1.Object-এর জন্য ভালোভাবে ডিজাইন করা হয়েছে , সাধারণত ক্লাস বা অবজেক্ট স্ট্রাকচার তৈরি করতে ব্যবহৃত হয়।

2.Extends করা যায়, একাধিক interface থেকে extend করে বড় structure তৈরি করা যায়।

3.Re-declaration করা যায়, একই interface বারবার ডিক্লেয়ার করলে TypeScript সেগুলো merge করে ফেলে।

4.Class-এ implements করা যায়, interface সহজেই class দ্বারা implement করা যায়।

5.Performance — বড় কোডবেসে interface কম্পাইলারে একটু বেশি পারফর্ম করে।


type:

1.Flexible — শুধু object না, function, union, intersection, tuple ইত্যাদিও define করা যায়।

2.Extends এর বদলে intersection & ব্যবহার করতে হয় structure মেশাতে।

3.Re-declare করা যায় না, একবার declare করার পর আবার একই নামে করলে error দেয়।

4.Class-এ সরাসরি implements করা যায় না (তবে object shape হলে করা যায়)।

5.Advanced Type Features — mapped types, conditional types ইত্যাদি ব্যবহার হয়।


Q5.What is type inference in TypeScript? Why is it helpful?

ans: Type Inference হচ্ছে TypeScript-এর একটি বৈশিষ্ট্য, যেখানে টাইপ স্পষ্টভাবে না লিখলেও TypeScript নিজে থেকে type অনুমান করে নেয়।

Why is it helpful?
কম কোড লিখে টাইপের সুবিধা পাওয়া যায় |
->টাইপ না লিখেও IntelliSense, অটো-কমপ্লিশন, ও টাইপ চেকিং কাজ করে।

ক্লিন ও সহজে বোঝা যায় এমন কোড |
->বারবার টাইপ না লিখে কোড পরিষ্কার থাকে।

টাইপ ভুল ধরতে সাহায্য করে |
->ভুল টাইপ ব্যবহারে TypeScript নিজে থেকে warning দেয়।

দ্রুত ডেভেলপমেন্টে সাহায্য করে |
-> IDE গুলো টাইপ inference ব্যবহার করে smart suggestions দেয়।
