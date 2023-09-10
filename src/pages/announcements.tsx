import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import AnnouncementList from "../components/announcements/AnnouncementList";
import { AnnouncementData } from "../components/announcements/types";
import Pagination from "../components/pagination/Pagination";

export default function Announcements(): JSX.Element {
  const [announcementList, setAnnouncementList] = useState<AnnouncementData[]>(
    [],
  );
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    import("./assets/announcements/announcements.json").then((data) => {
      setAnnouncementList(data.default);
    });
  }, []);
  const totalPages = Math.ceil(announcementList.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const displayedAnnouncements = announcementList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <Layout>
      <main className="container container--fluid margin-vert--lg">
        <AnnouncementList announcements={displayedAnnouncements} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
        />
      </main>
    </Layout>
  );
}
