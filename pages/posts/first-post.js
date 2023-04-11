import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>My name is Lee Hyeon Seo</h1>
      <h2>My hobby is Judo</h2>
      <video controls>
        <source src="/videos/judo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
