<template>
    <div class="header">
        <div class="header-wrap">
            <div class="logo">
                <span>SUDOL</span> 
                <div id="text-portfolio">Portfolio</div>
            </div>
            <div class="nav-wrap">
                <div class="menu-wrap">
                    <span>menu</span>
                    <i class="fa-solid fa-bars" id="nav-icon"></i>
                </div>
                <div class="nav">
                    <ul class="nav-list">
                        <li><a href="#welcome-section">Welcome</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                        <li><a href="#skill-section">Skills</a></li>
                        <li><a href="#project-section">Projects</a></li>
                    </ul>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderCom',
    components: {

    },
}
</script>

<style lang="scss" scoped>
//Color in Hex
$orange-dark: #f28907;
$yellow: #f2af5c;
$white: #f0f0f2;

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 99;
    background-color: rgba(38, 38, 38, 0.7);
    .header-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem 0 1.5rem;
        .logo {
            span {        
                font-family: "HSYuji-Regular";
                font-size: 3rem;
                font-weight: 600;
                color: $yellow;
            }
            #text-portfolio {
                display: inline-block;
                margin-left: 5px;
                font-size: 1.2rem;
            }
        }
        .nav-wrap {
            .menu-wrap {
                display: none;
                span {
                    opacity: 0;
                }
                #nav-icon {
                    font-size: 2rem;
                }
            }
            .nav {
                .nav-list {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    li {
                        padding: 0 15px;
                        line-height: 1;
                        border-left: 1px solid $white;
                        &:first-child {
                            border-left: none;
                            color: $orange-dark;
                        }
                        &:hover {
                            color: $yellow;
                        }
                    }
                }
            }
        }
    }
}

//반응형
@media (max-width: 420px) {
    .header {
        .header-wrap {
            .logo {
                span {        

                }
                #text-portfolio {
                    
                }
            }
            .nav-wrap {
                .menu-wrap {
                    
                    span {
                        
                    }
                    #nav-icon {
                        
                    }
                }
                .nav {
                    .nav-list {
                        
                        li {
                            
                        }
                    }
                }
            }
        }
    }
}

//메뉴 축소
@media (max-width: 768px) {
    .header {
        .header-wrap {
            padding-right: 1.5rem;
            .logo {
                span {        

                }
                #text-portfolio {
                    
                }
            }
            .nav-wrap {
                .menu-wrap {
                    display: block;
                    span {
                        
                    }
                    #nav-icon {
                        
                    }
                }
                .nav {
                    display: none;
                    .nav-list {
                        
                        li {
                            
                        }
                    }
                }
            }
        }
    }
}
</style>