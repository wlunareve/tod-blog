import Image from "next/image";

const postsExample = [
  "/entryImage.jpg",
  "/entryImage.jpg",
  "/entryImage.jpg",
  "/entryImage.jpg",
  "/entryImage.jpg",
  "/entryImage.jpg",
];

const Posts = ({ posts = postsExample }) => {
  return (
    <>
      <h2 className="posts-title my-4 text-6xl font-['DiamorScript']">
        Articles
      </h2>
      <div className="posts grid 2xl:grid-cols-3 xl:grid-cols-2 gap-6">
        {posts.map((post, index) => {
          return (
            <div className="post__wrapper text-center" key={index}>
              <Image
                src="/entryImage.jpg"
                width="3840"
                height="2160"
                objectFit="contain"
                alt="entryImage"
              />
              <div className="italic">
                <span>classification</span> / <span>data</span>
              </div>
              <h3 className="post-title text-lg">Article Name</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;