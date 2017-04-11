<template>
  <div id="user">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            {{$route.params.companyName}}
            user #{{ userId }}
          </div>
          <div class="md-subhead">Show messages {{messages[0].id}} - {{messages[messages.length - 1].id}}</div>
        </md-card-header-text>

        <router-link :to="{ name: 'companyPage', params: {
          companyName: $route.params.companyName,
          pageHash: $route.params.pageHash,
        }}">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>close</md-icon>
          </md-button>
        </router-link>
      </md-card-header>

      <md-card-content>

        <md-layout md-gutter="24">
          <md-layout v-for="message in messages" key="message.id" class="cardContainer">
            <md-card>
              <md-card-header>
                <div class="md-title">Message #{{ message.id }}</div>
                <div class="md-subhead">21th Aug 2016 15:34</div>
              </md-card-header>

              <md-card-content>
                {{ message.text }}
              </md-card-content>

              <md-card-actions>
                <md-button>Download dump</md-button>
              </md-card-actions>
            </md-card>
          </md-layout>
        </md-layout>

      </md-card-content>
      <md-card-actions>
        <router-link v-if="this.pageId > 0" :to="{ name: 'userPage', params: {
          companyName: $route.params.companyName,
          pageHash: $route.params.pageHash,
          userHash: $route.params.userHash,
          userPageHash: this.prevPageHash,
        }}">
          <md-button>&lt;&lt; Prev</md-button>
        </router-link>
        <router-link v-if="this.nextPageHash" :to="{ name: 'userPage', params: {
          companyName: $route.params.companyName,
          pageHash: $route.params.pageHash,
          userHash: $route.params.userHash,
          userPageHash: this.nextPageHash,
        }}">
          <md-button>Next &gt;&gt;</md-button>
        </router-link>

      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  import md5 from 'md5'
  const userIdToHash = (companyName, userId) => md5(`user${companyName}${userId}`)
  const pageIdToHash = userId => md5(`userpage${userId}`)

  const getMessage = (userHash, messageId) => {
    return `Message ${userHash} ${messageId}`;
  }

  export default {
    name: 'user',
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    data () {
      return {
        userId: 0,
        pageId: 0,
        nextPageHash: '',
        prevPageHash: '',
        itemsPerPage: 6,
        messages: [],
        messagesCount: 12321831,
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        const userHash = this.$route.params.userHash;
        const companyName = this.$route.params.companyName;

        const userIds = Array.apply(null, Array(1000)).map((i, index) => index);
        this.userId = userIds.find(id => userIdToHash(companyName, id) === userHash) || 0;

        const pageHash = this.$route.params.userPageHash;
        const pageIds = Array.apply(null, Array(1000)).map((i, index) => index);
        this.pageId = pageHash ? pageIds.find(id => pageIdToHash(id) === pageHash) : 0;
        this.nextPageHash = pageIdToHash(this.pageId + 1);
        this.prevPageHash = pageIdToHash(this.pageId - 1);
        this.messages = Array.apply(null, Array(this.itemsPerPage)).map((i, index) => {
          const messageId = this.itemsPerPage * this.pageId + index + 1;
          return {
            text: getMessage(userHash, messageId),
            id: messageId,
          }
        });
      }
    }
  }
</script>

<style>
  .cardContainer {
    margin-bottom: 40px;
  }
</style>