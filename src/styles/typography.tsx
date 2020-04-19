import React, {PureComponent} from 'react';
import {Text, TextStyle} from 'react-native';

import brandGuide from './brandColors';

interface HeaderProps {
  children: any;
  upper?: boolean;
  center?: boolean;
  white?: boolean;
  grey?: boolean;
  style?: TextStyle;
}

class H1 extends PureComponent<HeaderProps> {
  render() {
    const styles = this.getStyles() as TextStyle;
    return (
      <Text allowFontScaling={false} {...this.props} style={styles}>
        {this.props.children}
      </Text>
    );
  }

  getStyles = () => {
    let style = {
      fontSize: 26,
      lineHeight: 28,
      color: brandGuide.greys.black,
      textAlign: 'left',
      textTransform: 'none',
    };
    if (this.props.upper) {
      style.textTransform = 'uppercase';
    }
    if (this.props.center) {
      style.textAlign = 'center';
    }
    if (this.props.white) {
      style.color = brandGuide.greys.white;
    }
    if (this.props.grey) {
      style.color = brandGuide.greys.dark;
    }
    if (this.props.style) {
      style = {...style, ...this.props.style};
    }
    return [style];
  };
}

interface BodyProps {
  children: any;
  upper?: boolean;
  center?: boolean;
  right?: boolean;
  white?: boolean;
  grey?: boolean;
  bold?: boolean;
  style?: TextStyle;
}

class B1 extends PureComponent<BodyProps> {
  render() {
    const styles = this.getStyles() as TextStyle;
    return (
      <Text allowFontScaling={false} {...this.props} style={styles}>
        {this.props.children}
      </Text>
    );
  }

  getStyles = () => {
    let style = {
      fontSize: 16,
      lineHeight: 18,
      color: brandGuide.greys.black,
      textAlign: 'left',
      textTransform: 'none',
      fontWeight: '100',
    };
    if (this.props.white) {
      style.color = brandGuide.greys.white;
    }
    if (this.props.grey) {
      style.color = brandGuide.greys.darkest;
    }
    if (this.props.center) {
      style.textAlign = 'center';
    }
    if (this.props.right) {
      style.textAlign = 'right';
    }
    if (this.props.bold) {
      style.fontWeight = '800';
    }
    if (this.props.style) {
      style = {...style, ...this.props.style};
    }
    return [style];
  };
}

interface SubtextProps {
  children: any;
  center?: boolean;
  right?: boolean;
  white?: boolean;
  grey?: boolean;
  style?: TextStyle;
}

class S1 extends PureComponent<SubtextProps> {
  render() {
    const styles = this.getStyles() as TextStyle;
    return (
      <Text allowFontScaling={false} {...this.props} style={styles}>
        {this.props.children}
      </Text>
    );
  }

  getStyles = () => {
    let style = {
      fontSize: 13,
      lineHeight: 16,
      color: brandGuide.greys.black,
      textAlign: 'left',
      textTransform: 'none',
    };
    if (this.props.white) {
      style.color = brandGuide.greys.white;
    }
    if (this.props.grey) {
      style.color = brandGuide.greys.darkest;
    }
    if (this.props.center) {
      style.textAlign = 'center';
    }
    if (this.props.right) {
      style.textAlign = 'right';
    }
    if (this.props.style) {
      style = {...style, ...this.props.style};
    }
    return [style];
  };
}

export {H1, B1, S1};
