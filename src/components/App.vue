<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Datastore</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Our partners</h3>
        </div>
      </md-toolbar>


      <md-list>
        <router-link :to="{ name: 'company', params: { companyName: 'Zello' }}">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/5" alt="People">
            </md-avatar>

            <span>Zello</span>
          </md-list-item>
        </router-link>

        <router-link :to="{ name: 'company', params: { companyName: 'LinkedIn' }}">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <span>LinkedIn</span>
          </md-list-item>
        </router-link>

        <router-link :to="{ name: 'company', params: { companyName: 'Facebook' }}">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <span>Facebook</span>
            <md-divider class="md-inset"></md-divider>
          </md-list-item>
        </router-link>
      </md-list>
        <router-link :to="{ name: 'about'}">
          <md-list-item>
            <md-icon>move_to_inbox</md-icon> <span>About us</span>
          </md-list-item>
        </router-link>

        <router-link :to="{ name: 'privacy'}">
          <md-list-item>
            <md-icon>send</md-icon> <span>Privacy policy</span>
          </md-list-item>
        </router-link>

        <router-link :to="{ name: 'join'}">
          <md-list-item>
            <md-icon>send</md-icon> <span>How to join</span>
          </md-list-item>
        </router-link>

    </md-sidenav>
    <content>
      <router-view></router-view>
    </content>
  </div>
</template>

<script>
  export default {
    name: 'app',
    watch: {
      '$route': 'closeSidenav'
    },
    methods: {
      toggleSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      closeSidenav() {
        this.$refs.leftSidenav.close();
      }
    }
  }
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  content {
    max-width: 1140px;
    padding: 20px 20px;
    margin: 0 auto;
    display: block;
  }
  body {
    background-color: #f9f9f9;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
