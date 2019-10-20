<template>
  <v-container>
    About
    <h1>{{ countdown$ }}</h1>
    <v-btn
      v-stream:click="success$"
      :disabled="disable$"
      color="blue darken-4 white--text"
    >
      Success
    </v-btn>
    <v-btn
      v-stream:click="dismiss$"
      :disabled="disable$"
      color="red white--text"
    >
      Dismiss
    </v-btn>
  </v-container>
</template>

<script>
import { interval, pipe, of, Subject, observable } from 'rxjs'
import { scan, startWith, takeWhile, concat, repeatWhen, map, takeUntil, share } from 'rxjs/operators'
export default {
  subscriptions() {
    this.success$ = new Subject()
    this.dismiss$ = new Subject()
    const countdown$ = interval(1000).pipe(
      startWith(10),
      scan(time => time - 1),
      takeWhile(time => time > 0),
      concat(
        of('Time is end')
      ),
      share(),
      repeatWhen(() =>
        this.success$.pipe(
          takeUntil(this.dismiss$)
        )
      ),
      concat(
        of('Have a nice day')
      )
    )

    const disable$ = countdown$.pipe(
      map(value => value !== 'Time is end')
    )

    return {
      countdown$,
      disable$
    }
  },
}
</script>