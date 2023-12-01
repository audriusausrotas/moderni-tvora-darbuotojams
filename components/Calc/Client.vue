<script setup lang="js">
import {useProjectStore} from "~/store/project"

const useProject = useProjectStore()
const open = useState("clientOpen", ()=> true)

const updateFields = (value, type)=> {
  useProject.updateClient({value, type})

}
</script>

<template>
  <CalcTitle :open="open" name="Kliento Duomenys" @onClick="open = !open" />
  <div v-if="open" class="flex flex-col gap-8 mt-8 transition-all">
    <div class="flex justify-between">
      <BaseInput
        placeholder="Klientas"
        label="Klientas"
        width="80"
        :name="useProject.client.username"
        @onChange="(value) => updateFields(value, 'username')"
      />
      <BaseInput
        placeholder="Telefono Numeris"
        label="Telefono Numeris"
        type="number"
        width="80"
        :name="useProject.client.phone"
        @onChange="(value) => updateFields(value, 'phone')"
      />
      <BaseInput
        placeholder="Adresas"
        label="Adresas"
        width="80"
        :name="useProject.client.address"
        @onChange="(value) => updateFields(value, 'address')"
      />
    </div>
    <div>
      <BaseInput
        placeholder="Elektroninis Paštas"
        label="Elektroninis Paštas"
        width="80"
        :name="useProject.client.email"
        @onChange="(value) => updateFields(value, 'email')"
      />
    </div>
  </div>
</template>
<style scoped></style>
