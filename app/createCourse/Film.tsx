export default function Film({ comp }: { comp: string }) {
  return (
    <div className={`${comp==='film'?'':'hidden'}`}>
      <section className="md:pt-10 md:pb-10 pt-6 pb-6 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 border-b-[1px] border-slate-400">
        <h3 className="font-semibold text-2xl">Film & Edit</h3>
      </section>
      <section className="lg:pt-14 lg:pb-14 md:pt-10 md:pb-10 sm:pt-6 sm:pb-6 pt-4 pb-4 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2 bg-[#081f27]">
        <h2 className="sm:text-xl text-lg font-semibold">
          You’re ready to share your knowledge.
        </h2>
        <h3 className="lg:w-2/3 sm:text-base text-sm w-full mt-3 text-slate-300">
          This is your moment! If you’ve structured your course and used our
          guides, you're well prepared for the actual shoot. Pace yourself, take
          time to make it just right, and fine-tune when you edit.
        </h3>
      </section>
      <section className="pt-14 pb-14 md:pl-8 md:pr-8 sm:pl-5 sm:pr-5 pl-2 pr-2">
        <h2 className="text-xl font-semibold">Tips</h2>
        <h3 className="font-semibold mt-8">
          Take breaks and review frequently.
        </h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px] lg:w-4/5 w-full">
          Check often for any changes such as new noises. Be aware of your own
          energy levels--filming can tire you out and that translates to the
          screen.
        </h4>
        <h3 className="font-semibold mt-8">Build rapport.</h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px] lg:w-4/5 w-full">
          Students want to know who’s teaching them. Even for a course that is
          mostly screencasts, film yourself for your introduction. Or go the
          extra mile and film yourself introducing each section!
        </h4>
        <h3 className="font-semibold mt-8">Being on camera takes practice.</h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px] lg:w-4/5 w-full">
          Make eye contact with the camera and speak clearly. Do as many retakes
          as you need to get it right.
        </h4>
        <h3 className="font-semibold mt-8">
          Set yourself up for editing success.
        </h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px] lg:w-4/5 w-full">
          You can edit out long pauses, mistakes, and ums or ahs. Film a few
          extra activities or images that you can add in later to cover those
          cuts
        </h4>
        <h3 className="font-semibold mt-8">For screencasts, clean up.</h3>
        <h4 className="text-slate-300 text-[0.9rem] mt-[5px] lg:w-4/5 w-full">
          Move unrelated files and folders off your desktop and open any tabs in
          advance. Make on-screen text at least 24pt and use zooming to
          highlight.
        </h4>
      </section>
    </div>
  );
}
