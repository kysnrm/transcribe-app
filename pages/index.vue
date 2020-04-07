<template>
  <div>
    <base-uploader />
    <base-script :current-time="currentTime" @set-time="setTime" />
    <base-audio
      ref="audio"
      :last-setted-time="lastSettedTime"
      @update-current-time="updateCurrentTime"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Amplify from 'aws-amplify'

import BaseScript from '~/components/BaseScript.vue'
import BaseAudio from '~/components/BaseAudio.vue'
import BaseUploader from '~/components/BaseUploader.vue'

Amplify.configure({
  aws_project_region: 'ap-northeast-1',
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: 'ap-northeast-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: process.env.APPSYNC_APIKEY,
  aws_cognito_identity_pool_id: process.env.COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: 'ap-northeast-1',
  aws_user_pools_id: process.env.USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.USER_POOLS_WEB_CLIENT_ID,
  oauth: {},
  aws_user_files_s3_bucket: process.env.USER_FILES_S3_BUCKET,
  aws_user_files_s3_bucket_region: 'ap-northeast-1'
})

@Component({
  components: {
    BaseScript,
    BaseAudio,
    BaseUploader
  }
})
export default class Index extends Vue {
  currentTime: number = 0
  lastSettedTime: number = 0

  setTime(time: number) {
    this.lastSettedTime = time
  }

  updateCurrentTime(time: number) {
    this.currentTime = time
  }
}
</script>
