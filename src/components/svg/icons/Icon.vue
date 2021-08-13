<template>
        <a href="socialURL" target="_blank">
            <component :is="socialToDisplay" class="icon-social"/>
            </a>
</template>

<script>
import Facebook from './Facebook.vue';
import LinkedIn from './Linkedin.vue';
import Twitter from './Twitter.vue';
import Instagram from './Instagram.vue';
import SOCIAL_MEDIA_PLATFORMS from '../../../modules/messages';

export default {
  components: {
    Facebook, Twitter, Instagram, LinkedIn,
  },
  props: {
    socialMediaPlatform: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      socialToDisplay: this.socialMediaPlatform,
    };
  },
  computed: {
    socialURL() {
      console.log(SOCIAL_MEDIA_PLATFORMS);
      return 'Hello';
    //   if (this.socialMediaPlatform === SOCIAL_MEDIA_PLATFORMS.FACEBOOK) {
    //     return 'https://www.facebook.com/tmtarpinian';
    //   } if (this.socialMediaPlatform === SOCIAL_MEDIA_PLATFORMS.LINKEDIN) {
    //     return 'https://www.linkedin.com/in/tmtarpinian';
    //   } if (this.socialMediaPlatform === SOCIAL_MEDIA_PLATFORMS.INSTAGRAM) {
    //     return 'https://www.instagram.com/tmtarpinian';
    //   } if (this.socialMediaPlatform === SOCIAL_MEDIA_PLATFORMS.TWITTER) {
    //     return 'https://twitter.com/tmtarpinian';
    //   }
    },
  },
};
</script>
<li><a href="https://twitter.com/mayursuthar2693" target="_blank"><i class="icon-twitter"></i></a></li>
            <li><a href="" target="_blank"><i class="icon-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/in/sutharmayur" target="_blank"><i class="icon-linkedin"></i></a></li>
            <li><a href="https://www.pinterest.com/MayurSuthar2693/" target="_blank"><i class="icon-pinterest"></i></a></li>
            <li><a href="https://plus.google.com/109916819421919014146/posts" target="_blank"><i class="icon-google-plus"></i></a></li>
            <li><a href="https://www.instagram.com/mayursuthar2693/" target="_blank"><i class="icon-instagram"></i></a></li>
