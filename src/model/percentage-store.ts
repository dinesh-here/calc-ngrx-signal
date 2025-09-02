import { signalStore, withState, withComputed } from '@ngrx/signals';
import { IncDecPercentage, Percentage, ToPercentageCalc } from './percentage';
import { computed } from '@angular/core';



export const percentageStore = signalStore(
    withState<Percentage>(Percentage.CreateNew()),
    withComputed(({ percentage, amount }) => ({
        result: computed(() => (parseFloat(amount()) * parseFloat(percentage()) / 100))
    }))
);

export const toPercentageCalcStore = signalStore(
    withState<ToPercentageCalc>(ToPercentageCalc.CreateNew()),
    withComputed(({ amountOf, inWhat }) => ({
        result: computed(() => (parseFloat(amountOf()) / parseFloat(inWhat()) * 100))
    }))
);

export const incDecPercentageStore = signalStore(
    withState<IncDecPercentage>(IncDecPercentage.CreateNew()),
    withComputed(({ from, to }) => ({
        result: computed(() => {
            const result =((parseFloat(to()) - parseFloat(from())) / parseFloat(from()) * 100);
            return result.toFixed(2);
        })
    }))
);