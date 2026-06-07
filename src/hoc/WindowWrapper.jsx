import useWindowStore from "#store/window"
import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

<<<<<<< HEAD
const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;
            el.style.display = 'block';
            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
            );
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey) });
            return () => instance.kill();
        }, []);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        return (
            <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
                <Component {...props} />
            </section>
        );
=======
const WindowWrapper = (Component,windowKey) => {
    const Wrapped=(props)=>{
        const {focusWindow,windows}=useWindowStore();
        const {isOpen,zIndex}= windows[windowKey];
        const ref=useRef(null);
        //Why?
        // Because windows are:
        // draggable
        // focusable
        // animated
        // measurable
        // Refs let you:
        // attach drag logic
        // focus on click
        // integrate GSAP later
        useGSAP(()=>{
            const el=ref.current;
            if(!el || !isOpen) return;
            el.style.display='block';   
            gsap.fromTo(
                el,
                {scale:0.8,opacity:0, y:40},
                {scale:1,opacity:1,y:0,duration:0.4,ease:"power3.out"}
            );
        },[isOpen]);
        useGSAP(()=>{
            const el=ref.current;
            if(!el) return;
            const [instance]=Draggable.create(el,{onPress:()=>focusWindow(windowKey)});
            return ()=> instance.kill();

    },[])
        useLayoutEffect(()=>{   
            const el=ref.current;
            if(!el) return;
            el.style.display=isOpen ? 'block' : 'none';

        },[isOpen]);


        return (
        <section 
        id={windowKey} 
        ref={ref} 
        style={{zIndex}}
        className="absolute"
        >
            <Component {...props} />
        </section>
        )
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
    }
    Wrapped.displayName=`WindowWrapper(${Component.displayName||Component.name||'Component'})`;
    return Wrapped;
}

<<<<<<< HEAD
export default WindowWrapper
=======
export default WindowWrapper
>>>>>>> 01971d9d1633de4bc2b4dc4911d64cf4c8640538
