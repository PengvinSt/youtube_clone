import { SimpleGrid } from "@mantine/core";
import { ReactElement } from "react";
import VideoTeaser from "../components/VideoTeaser";
import HomePageLayout from "../layout/Home";
import styles from "../styles/home.module.css";
import { useVideoContext } from "../context/VideoContext";

const Home = () => {
  const { videos } = useVideoContext();
  return (
    <div className={styles.container}>
      <SimpleGrid cols={3}>
        {(videos || []).map((video) => {
          return <VideoTeaser key={video.videoId} video={video} />;
        })}
      </SimpleGrid>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;
