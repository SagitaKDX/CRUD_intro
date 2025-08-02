<template>
  <div id="app">
    <div class="ui blue segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary blue pointing menu compact">
          <router-link to="/words" exact class="item">
            <i class="comment outline icon"></i> Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
          <router-link to="/test" class="item">
            <i class="graduation cap icon"></i> Test
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
  background: linear-gradient(135deg, #2185d0 0%, #1678c2 100%) !important;
  border: none !important;
  box-shadow: 0 2px 10px rgba(33, 133, 208, 0.3);
}

.navbar .ui.menu {
  background: transparent !important;
  border: none !important;
}

.navbar .ui.menu .item {
  color: white !important;
  font-weight: 600;
  transition: all 0.3s ease;
}

.navbar .ui.menu .item:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
}

.navbar .ui.menu .item.active {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  border-color: white !important;
}

.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>