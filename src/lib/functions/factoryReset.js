import {
  acquaint, genesis, intertwined, primogem, stardust, starglitter, showBeginner, wishes
} from '$lib/store/stores';
import HistoryIDB from '$lib/store/historyIdb'


const { clearIDB } = HistoryIDB;
const factoryReset = () => {
  localStorage.clear();
  localStorage.setItem('primogem', 1600);

  clearIDB();

  acquaint.set(0);
  genesis.set(0);
  intertwined.set(0);
  primogem.set(1600);
  stardust.set(0);
  starglitter.set(0);

  showBeginner.set(true);
  wishes.set([]);
}

export default factoryReset;
