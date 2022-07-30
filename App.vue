<script setup lang="ts">
//import { useToast } from "primevue/usetoast";
if(process.client){
    const wsClient = new WebSocket('ws://3.95.147.29:1880/ws/iot-data')

    wsClient.onopen = function() {
      console.log("Connected!")
    }

    wsClient.onclose = function() {
      console.log("Connection closed!")
    }

    wsClient.onmessage = function(msg) {
      const data = JSON.parse(msg.data)
      const { topic, location } = data
console.log(data, topic)
      if(topic== 'newData'){
        const { temperature, humidity, pressure } = data
        let localData = locationData.find((data) => data.key == location)
        localData.data.humidity.value = humidity
        localData.data.temperature.value = temperature
        localData.data.pressure.value = pressure
        console.log(localData)
      }
    }
  }

// const toast = useToast()
// toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
  const locationData = reactive([
    {
      label: "Ante-Sala",
      key: "antesala",
      data: {
        temperature: {
          label: "Temperatura",
          value: 12,
          unit: "°C"
        },
        pressure: {
          label: "Pressão",
          value: 12,
          unit: "Pa"
        },
        humidity: {
          label: "Umidade",
          value: 12,
          unit: "%"
        },
      }
    },
    {
      label: "Sala de paramentação",
      key: "paramentacao",
      data: {
        temperature: {
          label: "Temperatura",
          value: 12,
          unit: "°C"
        },
        pressure: {
          label: "Pressão",
          value: 12,
          unit: "Pa"
        },
        humidity: {
          label: "Umidade",
          value: 12,
          unit: "%"
        },
      }
    },
    {
      label: "Corredor Principal",
      key: "principal",
      data: {
        temperature: {
          label: "Temperatura",
          value: 12,
          unit: "°C"
        },
        pressure: {
          label: "Pressão",
          value: 12,
          unit: "Pa"
        },
        humidity: {
          label: "Umidade",
          value: 12,
          unit: "%"
        },
      }
    },
    {
      label: "Sala de Equipamentos",
      key: "equipamentos",
      data: {
        temperature: {
          label: "Temperatura",
          value: 12,
          unit: "°C"
        },
        pressure: {
          label: "Pressão",
          value: 12,
          unit: "Pa"
        },
        humidity: {
          label: "Umidade",
          value: 12,
          unit: "%"
        },
      }
    }
  ])

  const chunkedLocationData = computed(() => {
    const chunkSize = 2;
    const chunkList = []
    for (let i = 0; i < locationData.length; i += chunkSize) {
      const chunk = locationData.slice(i, i + chunkSize);
      chunkList.push(chunk);
    }
    return chunkList
  })


</script>

<template>
<div class="body">
      <!-- <Toast /> -->
 <div class="flex-column">
    <div class="flex-row" v-for="locationsData in chunkedLocationData">
    <SectionCard v-for="location in locationsData" :location="location.label" :key="location.key">
        <ItemCard class="item-card"
           :variable="location.data.temperature.label" 
           :value="location.data.temperature.value"
           :unit="location.data.temperature.unit"
           iconPath="/termometro.png"/>
        <ItemCard class="item-card" 
        :variable="location.data.pressure.label" 
           :value="location.data.pressure.value"
           :unit="location.data.pressure.unit"
        iconPath="/gauge.png"></ItemCard>
        <ItemCard class="item-card" 
        :variable="location.data.humidity.label" 
           :value="location.data.humidity.value"
           :unit="location.data.humidity.unit"
            iconPath="/moisture.png"></ItemCard>
      </SectionCard>
      <!-- <SectionCard location="Ante-Sala">
        <ItemCard class="item-card" variable="Temperatura" value="12" unit="°C" iconPath="/termometro.png"></ItemCard>
        <ItemCard class="item-card" variable="Pressão" value="12" unit="Pa" iconPath="/gauge.png"></ItemCard>
        <ItemCard class="item-card" variable="Umidade" value="12" unit="%" iconPath="/moisture.png"></ItemCard>
      </SectionCard>
      
      <SectionCard location="Sala de paramentação">
        <ItemCard class="item-card" variable="Temperatura" value="12" unit="°C" iconPath="/termometro.png"></ItemCard>
        <ItemCard class="item-card" variable="Pressão" value="12" unit="Pa" iconPath="/gauge.png"></ItemCard>
        <ItemCard class="item-card" variable="Umidade" value="12" unit="%" iconPath="/moisture.png"></ItemCard>
      </SectionCard> -->
    </div>

    <!-- <div class="flex-row">
      <SectionCard location="Corredor Principal">
        <ItemCard class="item-card" variable="Temperatura" value="12" unit="°C" iconPath="/termometro.png"></ItemCard>
        <ItemCard class="item-card" variable="Pressão" value="12" unit="Pa" iconPath="/gauge.png"></ItemCard>
        <ItemCard class="item-card" variable="Umidade" value="12" unit="%" iconPath="/moisture.png"></ItemCard>
      </SectionCard>
      
      <SectionCard location="Sala de Equipamentos">
        <ItemCard class="item-card" variable="Temperatura" value="12" unit="°C" iconPath="/termometro.png"></ItemCard>
        <ItemCard class="item-card" variable="Pressão" value="12" unit="Pa" iconPath="/gauge.png"></ItemCard>
        <ItemCard class="item-card" variable="Umidade" value="12" unit="%" iconPath="/moisture.png"></ItemCard>
      </SectionCard>
    </div> -->
  </div>
</div>
</template>

<style scoped>

  .body {
    background: #FAFAFA;
    width: 100vw;
    height: 100vh;

    padding: 2rem;
  }

  .item-card {
    min-width: 10rem;
    background: #FAFAFA;
    
  }

  .flex-row {
    display: flex;
    justify-content: center;
    gap: 5vw;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
