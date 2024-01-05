import {useState, useEffect} from 'react';
import {getRamdomFact} from '../services/facts';

export function useCatFact () {
    const [fact, setFact] = useState();
    const refreshRandomFact = () => {
      getRamdomFact().then((fact) => setFact(fact));
    };
    //get the fact when the component is mounted
    useEffect(refreshRandomFact, []);
    return {fact, refreshRandomFact};
  };