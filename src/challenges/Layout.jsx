const layout = [
  {
    name: 'Daniel Clifford',
    job: 'Verified Graduate',
    quote:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    info: "I was an EMT for many years before I joined the bootcamp. I've beenlooking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.",

    bg: '#5c32a0',
  },
  {
    name: 'Jonathan Walters',
    job: 'Verified Graduate',
    quote: 'The team was very supportive and kept me motivated',
    info: "I started as a total newbie with virtually no coding skills. I nowwork as a mobile engineer for a big company. This was one of the best investments I've made in myself.",

    bg: '#3a4456',
  },
  {
    name: 'Daniel Cilfford',
    job: 'State manager',
    quote: 'Such a life-changing experience. Highly recommended!',
    info: "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    bg: '#fff',
  },
  {
    name: 'Daniel CIlfford',
    job: 'State manager',
    quote: 'Such a life-changing experience. Highly recommended!',
    info: 'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
    bg: '#fff',
  },
  {
    name: 'Daniel CIlfford',
    job: 'State manager',
    quote:
      'Awesome teaching support from TAs who did the bootcamp themselves.Getting guidance from them and learning from their experiences was easy.',
    info: 'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.',
    bg: '#141a25',
  },
];

const Challenge2 = () => {
  return (
    <>
      <section className=" place-items-strech  m-[30px]  grid  h-auto w-[1300px]  grid-cols-4     gap-x-[20px] gap-y-[30px] rounded-2xl border-2  border-solid bg-[#d5d9df] p-[20px] text-white">
        {layout.map((s, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col justify-between  gap-[10px] rounded-xl px-8 py-10 text-justify
              
              bg-[${s.bg}]  ${
                i === 0
                  ? 'col-span-2'
                  : i === 2
                  ? 'col-start-4 row-span-2 text-[#454c5a]'
                  : i === 3
                  ? ' text-[#454c5a]'
                  : i === 4 && 'col-span-2'
              } `}
            >
              <div className="">
                <h2 className="text-[30px]">{s.name}</h2>
                <h4 className="text-[20px] brightness-75">{s.job}</h4>
              </div>
              <span className="font-mono text-[20px] font-bold">{s.quote}</span>
              <p className="text-[15px] brightness-75">"{s.info}"</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Challenge2;
