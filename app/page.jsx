import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="mt-5 text-5xl font-extrabold text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-orange-200">AI-Powered Prompts</span>
      </h1>
      <p className="">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
