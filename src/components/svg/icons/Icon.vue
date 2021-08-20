<template>
    <component :is="socialToDisplay" class="icon-social"/>
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
