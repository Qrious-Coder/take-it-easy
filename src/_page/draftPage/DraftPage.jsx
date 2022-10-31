 // eslint-disable-next-line
import { fromEvent, from, delay, of, 
  Observable, interval, takeWhile, timer,
  range, map, filter, mergeWith, merge} from 'rxjs'
import axios, {get} from 'axios';
// impor all rx: npm install @reactivex/rxjs
// import 'rxjs/add/observable/interval';

import React, { useEffect, useRef, useState } from 'react';

const DraftPage = () => {

  const [ data, setData] = useState('')
  const [ book, setBook] = useState('')
    //Create observer useRef
  const btnRef = useRef(null);
  useEffect( () => {
    const click$ = fromEvent(btnRef.current, 'click').subscribe( 
        event => console.log('click', event),
        err => console.log( 'err', err),
        () => console.log('completed')  
      )
    return () => click$.unsubscribe(); 
  }, [])
 
  //*------------------------ work with events
  const inputRef = useRef(null)
  useEffect( () => {
    const click$ = fromEvent(inputRef.current, 'keyup').subscribe( 
        event => {
          console.log('click', event.target.value);
        },
        err => console.log( 'err', err),
        () => console.log('completed')  
      )
    return () => click$.unsubscribe(); 
  }, [])
  
  //* use 'of': take the whole arr
  //* use 'from': take out very element of an arr/obj
  // const arr= [1,2,3,4,5]

  // useEffect( ()=>{
  //   const arr$ = of(arr).subscribe(
  //     value => console.log(value),
  //     err => console.log(err),
  //     () => console.log('completed')
  //   )
  //   return () => arr$.unsubscribe()
  // }, [])

  //*------------------------object
  // const mockApi = [
  //  {users: [
  //       { name:'user1', pw: 1234 },
  //       { name:'user2', pw: 5678 },
  //       { name:'user3',pw: 1011 }
  //     ]
  //   },
  //   {
  //     posts: [
  //       { title: 'title-1', like: true},
  //       { title: 'title-2', like: false},
  //       { title: 'title-3', like: false}
  //     ]
  //   }
  // ]

  // useEffect( ()=>{
  //   const mockApi$ = from(mockApi).subscribe(
  //     value => console.log(value),
  //     err => console.log(err),
  //     () => console.log('completed')
  //   )
  //   return () => mockApi$.unsubscribe()
  // }, [])

  //------------------------- work with API : map, filter
  const fetchData = async () => {
    await axios
      .get('http://localhost:5000/books')
      .then( res => {
        setData(res.data)
      })
  }
 
  useEffect( () => {
    fetchData()
    const booklist$ = from (data)
    // .pipe(map( item => item.title.toUpperCase() ))
    // .pipe(map( item => item + ' hello' ))
    .pipe(filter( item => item.like === true))
    .subscribe(
      item => {
        console.log('Book api fetched', item)
        setBook(item)
      },
      err => console.log(err),
      () => console.log('completed')
    )

    return () => {
      booklist$.unsubscribe();
    };
  }, [data.length])

  //***---------------------- interval

  const interval1$ = interval(500).pipe(takeWhile( x => x < 2 ))
    // .pipe(map( x => x * 2));
  const interval2$ = interval(1000).pipe(takeWhile( x => x < 5 ))
    // .pipe(map( x => x * 2));

  // const interval1$ = interval(500).pipe(map( x => x < 2 && x * 2));
  // const interval2$ = interval(1000).pipe(map( x => x < 2 && x * 3));
  merge( interval1$, interval2$)
  .subscribe(
    x => {
      console.log('interval 1000: ', x);
    },
    err => {
      console.log(err);
    },
    () => {
      console.log('completed');
    }
  );

  //***---------------------- timer

  // timer(5000,2000).pipe(takeWhile( x => x < 3 )).subscribe(
  //   x => {
  //     console.log('timer start after 5000: ',x);
  //   },
  //   err => {
  //     console.log(err);
  //   },
  //   () => {
  //     console.log('completed');
  //   }
  // );

  //***---------------------- range

  // range(1,3).subscribe(
  //   x => {
  //     console.log('rang 1-3 ',x);
  //   },
  //   err => {
  //     console.log(err);
  //   },
  //   () => {
  //     console.log('completed');
  //   }
  // );
  
  //***---------------------- Create an observale from scratch
  // const source$ = new Observable ( observer => {
  //   console.log('creating observable')
  //   observer.next('hello')
  //   observer.next('another value')
  //   setTimeout( () => {
  //     observer.next('yet another value')
  //     observer.complete()
  //   }, 5000 )

  // })

  // source$.subscribe(
  //   value => console.log(value),
  //   err => console.log(err),
  //   () => console.log('completed')
  // )

  //***---------------------- map

  //  const mapAction$ = interval(1000).
  //  pipe(takeWhile( x => x < 5 )).
  //  pipe(map( x => x * 3 ))

  //  mapAction$.subscribe(
  //   x => {
  //     console.log('map: ', x);
  //   },
  //   err => {
  //     console.log(err);
  //   },
  //   () => {
  //     console.log('completed');
  //   }
  // );

   //***---------------------- merge and concat

  //  const str1$ = from('hello')
  //  const str2$ = from('world')
  //  const str3$ = from('aaaaaaaaaaa')

  //  const str$ = merge(str1$, str2$, str3$) 

  //  str$.subscribe(
  //   x => console.log('test merge:', x),
  //   err => console.log( err),
  //   () => console.log('completed')
  //  )

   //** -------------------- */

  return (
    <div className='rxjs'>
      <h1>Rxjs + React</h1>
        <button ref={ btnRef } type='btn'> Click Rxjs</button>
        <hr></hr>
        <input ref={ inputRef }/>
        <hr></hr>
        {book.title}
    </div>
   
  )
}

export default DraftPage