<template>
  <div id="company">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Company {{ $route.params.companyName }}</div>
          <div class="md-subhead">Show users {{users[0].id}} - {{users[users.length - 1].id}}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>

        <md-list>
          <md-list-item v-for="user in users" key="user.id">
            <md-avatar>
              <img v-bind:src="`https://placeimg.com/40/40/people/${user.id}`" alt="People">
            </md-avatar>

            <span>
              <router-link :to="{ name: 'user', params: { companyName: $route.params.companyName, pageHash: pageHash, userHash: user.hash }}">
                User #{{user.id}}
              </router-link>
            </span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>
        </md-list>

      </md-card-content>
      <md-card-actions>
        <router-link v-if="pageId > 0" :to="{ name: 'companyPage', params: { companyName: $route.params.companyName, pageHash: prevPageHash }}">
          <md-button>&lt;&lt; Prev</md-button>
        </router-link>
        <router-link v-if="nextPageHash" :to="{ name: 'companyPage', params: { companyName: $route.params.companyName, pageHash: nextPageHash }}">
          <md-button>Next &gt;&gt;</md-button>
        </router-link>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  import md5 from 'md5'
  const pageIdToHash = (companyName, pageId) => md5(`page${companyName}${pageId}`)
  const userIdToHash = (companyName, userId) => md5(`user${companyName}${userId}`)

  export default {
    name: 'company',
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    data () {
      return {
        pageId: 0,
        pageHash: '',
        nextPageHash: '',
        prevPageHash: '',
        usersPerPage: 10,
        users: [],
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        const companyName = this.$route.params.companyName;
        this.pageHash = this.$route.params.pageHash || pageIdToHash(companyName, 0);
        const pageIds = Array.apply(null, Array(1000)).map((i, index) => index);
        this.pageId = pageIds.find(id => pageIdToHash(companyName, id) === this.pageHash);

        this.nextPageHash = pageIdToHash(companyName, this.pageId + 1);
        this.prevPageHash = pageIdToHash(companyName, this.pageId - 1);
        this.users = Array.apply(null, Array(this.usersPerPage)).map((i, index) => {
          const userId = this.usersPerPage * this.pageId + index + 1;
          return {
            id: userId,
            hash: userIdToHash(companyName, userId),
          }
        });
      }
    }
  }
</script>
