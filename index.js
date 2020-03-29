import React from "react";

// Similiar to constructor in class component
export function onConstruct(callback) {
  React.useMemo(callback, []);
}

// Similiar to componentWillMount in class component
export function onWillMount(callback) {
  React.useLayoutEffect(callback, []);
}

// Similiar to componentDidMount in class component
export function onDidMount(callback) {
  React.useEffect(callback, []);
}

// Similiar to componentWillReceiveProps in class component
export function onWillReceiveProps(callback, ...props) {
  React.useLayoutEffect(callback, [...props]);
}

// Similiar to getSnapshotBeforeUpdate in class component
export function onGetSnapshotBeforeUpdate(callback) {
  React.useLayoutEffect(callback);
}

// Similiar to componentDidUpdate in class component
export function onDidUpdate(callback) {
  const renderRef = React.useRef(false);
  function update() {
    if (renderRef.current === true) {
      callback();
    } else {
      renderRef.current = true;
    }
  }

  return React.useEffect(update);
}

// Similiar to componentWillUnmount in class component
export function onWillUnmount(callback) {
  React.useEffect(() => callback, []);
}
