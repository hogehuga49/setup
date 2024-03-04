<?php

namespace App\Http\Controllers;

use Illuminate\Http\{Response};
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function test()
    {
        $a = 'hoge'; // ここにブレイクポイント
        return $this->successResponse(title: "ほげほげ", content: []);
    }

    public function successResponse($content = [], $title = "", $errorCode = 0, $message = "成功")
    {
        $json = [
            'title' => $title,
            'message' => $message,
            'content' => $content,
            'errorCode' => $errorCode
        ];
        return response()->json($json, Response::HTTP_OK);
    }
}
