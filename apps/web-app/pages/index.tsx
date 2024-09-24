import { SimpleGrid } from "@mantine/core";
import { ReactElement } from "react";
import HomePageLayout from "../layout/Home";
import styles from "../styles/home.module.css";
import { useVideoContext } from "../context/VideoContext";
import { VideoTeaser } from "../components/VideoTeaser";

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
const getLayout = (page: ReactElement) => {
  return <HomePageLayout>{page}</HomePageLayout>;
};

Home.getLayout = getLayout;

export default Home;
