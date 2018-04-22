
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct()
	{
	   parent::__construct();
	    //helpers
	   $this->load->helper('url');
	}

	public function index()
	{
		$this->load->view('home_view');
    }
    
    public function insert_record()
    {
        $data = $this->input->post();
        if(!empty($data)){
            $this->home_model->insert_article($data);
        }
        
        $this->load->view('insert_article'); 
    }

    public function show_records()
	{
		$data['article'] = $this->home_model->show_articles();
		$this->load->view('show_article',$data);
	}

}

?>