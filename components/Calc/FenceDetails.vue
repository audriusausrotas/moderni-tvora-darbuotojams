<script setup lang="js">
const fenceTypes = ["Daimond 60/90", "Daimond 105/40", "Alba", "Plank", "žaliuzi", "eglė", "Dija","standard", "sigma","astra", "polo","EVA", "EVA3",  "estetic", "emka", ]

const fenceColors = ["7016", "7024", "8019", "8017", "6020", "6005", "9005", "3009", "Kita"]

const fenceMaterial = ["Matinė", "Blizgi", "IceCrystal", ]

const fenceSide=["priekis", "galas", "kairė", "dešinė"]
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-between">
      <BaseSelectField
        label="Tvoros pusė"
        :values="fenceSide"
        id="fenceSide"
        :defaultValue="fenceSide[0]"
        width="60"
      />
      <BaseSelectField
        label="Tvoros tipas"
        :values="fenceTypes"
        id="fenceType"
        :defaultValue="fenceTypes[0]"
        width="60"
      />
      <BaseSelectField
        label="Tvoros spalva"
        :values="fenceColors"
        id="fenceColor"
        :defaultValue="fenceColors[0]"
        width="60"
      />
      <BaseSelectField
        label="Skardos Tipas"
        :values="fenceMaterial"
        id="fenceMaterial"
        :defaultValue="fenceMaterial[0]"
        width="60"
      />
    </div>

    <div class="flex justify-between">
      <BaseCheckField label="be montavimo" name="montavimas" />
    </div>
  </div>
</template>
