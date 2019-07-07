import React, { Component } from 'react';
import Header from './components/templates/container';
import Main from './components/main';
import Footer from './components/templates/footer';
import UserStore from '../../user-redux/store';
import { Provider } from 'react-redux';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import styles from './components/styles';

class Pages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 'none',
        }

        this.displayBtn = this.displayBtn.bind(this);
        this.onScrollChange = this.onScrollChange.bind(this);
        //this.onScrollByChange = this.onScrollByChange.bind(this);
        this.handleScrollBy = this.handleScrollBy.bind(this);
    }



    onScrollChange() {
        return this.displayBtn;
    }

    displayBtn() {
        const windowHeight = window.innerHeight + 100;
        if(document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
            //alert('hello');
            this.setState({
                display: 'block'
            })
        } else {
            this.setState({
                display: 'none'
            })
        } 
    }

    handleScrollBy(e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    componentDidMount() {
        //window.onscroll = this.onScrollChange();
    }

    render() {
        const { classes } = this.props;
        const theme = createMuiTheme({
            palette: {
                primary: green,
            }
        })

        return (
            <div>
                <Provider store={UserStore}>
                    <Header />
                </Provider>
                <Provider store={UserStore}>
                    <Main />
                </Provider>
                <Footer />
                <div className='fab-btn-cover' style={{display: this.state.display}}>
                    <Button variant='fab' className={classes.fabButton} onClick={this.handleScrollBy}>
                        <UpIcon />
                    </Button>
                </div>
            </div>
        )
    };
}

export default withStyles(styles)(Pages);