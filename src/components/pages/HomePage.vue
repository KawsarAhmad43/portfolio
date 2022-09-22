<template>
  <div>
    <BannerComp />
    <ProfileComp />
    <VideoComp />
    <AboutComp />
    <ExpertiseComp />
    <ServiceComp />
    <ProjectComp />
    <ContactComp />
  </div>
</template>

<script>
import VideoComp from "../elements/VideoComp";
import BannerComp from "../sections/BannerComp";
import ProfileComp from "../sections/ProfileComp";
import AboutComp from "../sections/AboutComp";
import ExpertiseComp from "../sections/ExpertiseComp";
import ServiceComp from "../sections/ServiceComp";
import ProjectComp from "../sections/ProjectComp";
import ContactComp from "./ContactComp";
export default {
  name: "HomePage",
  components: {
    BannerComp,
    VideoComp,
    AboutComp,
    ExpertiseComp,
    ProfileComp,
    ServiceComp,
    ProjectComp,
    ContactComp,
  },
};





</script>

<style></style>
