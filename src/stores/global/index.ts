import { defineStore } from "pinia";
import { ref } from 'vue'

const globalConfig=()=>{
    // 是否折叠菜单
    const collapsed = ref<boolean>(false);
    
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
    }

    return {
        collapsed,
        toggleCollapsed
    }
}


export const useGlobalConfig = defineStore("global-config", globalConfig);
  