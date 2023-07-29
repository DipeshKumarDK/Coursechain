import AnnouncementCard from "@/components/AnnoucementCard";

export default function Announcement({ comp }: { comp: string }) {
    return (
      <div className={`pt-5 pb-10 xl:pl-24 xl:pr-24 lg:pl-16 lg:pr-16 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 pl-1 pr-1 ${comp === 'announcement'?'':'hidden'}`}>
         <AnnouncementCard/>
         <AnnouncementCard/>
         <AnnouncementCard/>
      </div>
    );
  }