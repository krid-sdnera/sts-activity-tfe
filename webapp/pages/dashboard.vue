<script setup lang="ts"></script>

<template>
  <LPage>
    <v-row>
      <v-col cols="12">
        <v-card tile :color="useLcarsColor()">
          <v-card-title>
            <h2>Welcome to Starfleet</h2>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card tile :color="useLcarsColor()">
          <v-card-title>
            <h4>Assignment: Survey Mission in the Echo Star system</h4>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-btn block tile :color="useLcarsColor()" to="/mission">
          View mission details
        </v-btn>
      </v-col>

      <v-col cols="8">
        <v-card tile :color="useLcarsColor()">
          <v-card-title>
            <h4>
              Secondary Assignment: Monitor the life support systems of away
              team
            </h4>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-btn block tile :color="useLcarsColor()" to="/life-support">
          Monitor Life Support
        </v-btn>
      </v-col>
    </v-row>
  </LPage>
</template>
